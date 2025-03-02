import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubStreakTable = () => {
    const [githubData, setGithubData] = useState(null);
    const [contributionData, setContributionData] = useState({
        currentStreak: 0,
        totalContributions: 0,
        contributionCalendar: [],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['', 'Mon', '', 'Wed', '', 'Fri', '']
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const username = 'vegadjay';
    const currentYear = 2025;

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userResponse.json();
                setGithubData(userData);

                try {
                    const contributionResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
                    const contributionData = await contributionResponse.json();

                    if (contributionData && contributionData.contributions) {
                        processContributionData(contributionData.contributions);
                    } else {
                        await fetchRecentActivity();
                    }
                } catch (err) {
                    console.log("Error fetching contribution data, using events API fallback:", err);
                    await fetchRecentActivity();
                }
            } catch (err) {
                console.error("Error fetching GitHub data:", err);
                setError("Failed to load GitHub data. Please try again later.");
                setLoading(false);
            }
        };

        const fetchRecentActivity = async () => {
            const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public`);
            const eventsData = await eventsResponse.json();
            processEventsData(eventsData);
        };

        fetchGitHubData();
    }, [username]);

    const processEventsData = (events) => {
        const today = new Date();
        const contributionMap = new Map();
        let currentStreak = 0;
        let totalContributions = 0;

        events.forEach(event => {
            const eventDate = new Date(event.created_at);
            if (eventDate.getFullYear() === currentYear) {
                const date = eventDate.toISOString().split('T')[0];
                const count = contributionMap.get(date) || 0;
                contributionMap.set(date, count + 1);
                totalContributions++;
            }
        });

        let checkDate = new Date(today);
        while (true) {
            if (checkDate.getFullYear() !== currentYear) break;
            const dateStr = checkDate.toISOString().split('T')[0];
            if (contributionMap.has(dateStr)) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }

        const startDate = new Date(currentYear, 0, 1);
        const endDate = new Date();
        const dayDiff = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
        const contributionCalendar = [];

        for (let i = 0; i < dayDiff; i++) {
            const day = new Date(startDate);
            day.setDate(day.getDate() + i);
            const dateStr = day.toISOString().split('T')[0];
            const count = contributionMap.get(dateStr) || 0;
            let level = 0;
            if (count > 0) {
                level = Math.min(Math.ceil(count / 2), 4);
            }
            contributionCalendar.push({ date: dateStr, count, level });
        }

        const firstDayOfWeek = new Date(startDate).getDay() || 7;
        for (let i = 1; i < firstDayOfWeek; i++) {
            const paddingDate = new Date(startDate);
            paddingDate.setDate(paddingDate.getDate() - i);
            contributionCalendar.unshift({
                date: paddingDate.toISOString().split('T')[0],
                count: 0,
                level: 0,
                isPadding: true
            });
        }

        setContributionData({
            currentStreak,
            totalContributions,
            contributionCalendar,
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdays: ['', 'Mon', '', 'Wed', '', 'Fri', '']
        });
        setLoading(false);
    };

    const processContributionData = (contributions) => {
        let currentStreak = 0;
        let totalContributions = 0;
        const filteredContributions = contributions.filter(day => {
            const date = new Date(day.date);
            return date.getFullYear() === currentYear;
        });

        const contributionCalendar = [];
        filteredContributions.forEach(day => {
            totalContributions += day.count;
            let level = 0;
            if (day.count > 0) {
                level = Math.min(Math.ceil(day.count / 2), 4);
            }
            contributionCalendar.push({ date: day.date, count: day.count, level });
        });

        for (let i = contributionCalendar.length - 1; i >= 0; i--) {
            if (contributionCalendar[i].count > 0) {
                currentStreak++;
            } else {
                break;
            }
        }

        const startDate = new Date(currentYear, 0, 1);
        const firstDayOfWeek = startDate.getDay() || 7;
        for (let i = 1; i < firstDayOfWeek; i++) {
            const paddingDate = new Date(startDate);
            paddingDate.setDate(paddingDate.getDate() - i);
            contributionCalendar.unshift({
                date: paddingDate.toISOString().split('T')[0],
                count: 0,
                level: 0,
                isPadding: true
            });
        }

        setContributionData({
            currentStreak,
            totalContributions,
            contributionCalendar,
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdays: ['', 'Mon', '', 'Wed', '', 'Fri', '']
        });
        setLoading(false);
    };

    const getContributionColor = (level, isPadding = false) => {
        if (isPadding) return 'bg-transparent';
        const colors = [
            'bg-gray-800',
            'bg-green-900',
            'bg-green-700',
            'bg-green-500',
            'bg-green-300',
        ];
        return colors[level];
    };

    const getWeeks = () => {
        const calendar = contributionData.contributionCalendar;
        const weeks = [];
        for (let i = 0; i < calendar.length; i += 7) {
            weeks.push(calendar.slice(i, Math.min(i + 7, calendar.length)));
        }
        return weeks;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-green-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-400 py-8">
                {error}
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <div className="min-w-max">
                <div className="relative mt-6">
                    <div className="flex">
                        <div className="flex flex-col justify-around pr-2 h-28">
                            {contributionData.weekdays.map((day, index) => (
                                <div key={`day-${index}`} className="text-xs text-gray-400 h-3">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-1 gap-1 overflow-x-auto pb-2">
                            {getWeeks().map((week, weekIndex) => (
                                <div key={`week-${weekIndex}`} className="flex flex-col gap-1 flex-shrink-0">
                                    {week.map((day, dayIndex) => (
                                        <motion.div
                                            key={`day-${weekIndex}-${dayIndex}`}
                                            className={`h-3 w-3 rounded-full ${getContributionColor(day.level, day.isPadding)}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                delay: 0.5 + (weekIndex * 0.01),
                                                duration: 0.3
                                            }}
                                            whileHover={{
                                                scale: 1.2,
                                                transition: { duration: 0.2 }
                                            }}
                                            title={day.isPadding ? "" : `${day.date}: ${day.count} contributions`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-2">
                        <a href="https://github.com/Vegadjay" className="text-blue-400 text-xs sm:text-sm hover:underline" target='_blank'>
                            Find new
                        </a>
                        <div className="flex items-center gap-1">
                            <span className="text-xs sm:text-sm text-gray-400">Less</span>
                            <div className={`h-3 w-3 rounded-sm ${getContributionColor(0)}`}></div>
                            <div className={`h-3 w-3 rounded-sm ${getContributionColor(1)}`}></div>
                            <div className={`h-3 w-3 rounded-sm ${getContributionColor(2)}`}></div>
                            <div className={`h-3 w-3 rounded-sm ${getContributionColor(3)}`}></div>
                            <div className={`h-3 w-3 rounded-sm ${getContributionColor(4)}`}></div>
                            <span className="text-xs sm:text-sm text-gray-400">More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubStreakTable;