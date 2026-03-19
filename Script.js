// Timezone configuration
const timezones = {
    'newyork': { name: 'America/New_York', label: 'New York' },
    'london': { name: 'Europe/London', label: 'London' },
    'paris': { name: 'Europe/Paris', label: 'Paris' },
    'tokyo': { name: 'Asia/Tokyo', label: 'Tokyo' },
    'sydney': { name: 'Australia/Sydney', label: 'Sydney' },
    'dubai': { name: 'Asia/Dubai', label: 'Dubai' },
    'singapore': { name: 'Asia/Singapore', label: 'Singapore' },
    'saopaulo': { name: 'America/Sao_Paulo', label: 'São Paulo' },
    'local': { name: null, label: 'Local Time' }
};

let is24HourFormat = true;

/**
 * Format time according to 12/24 hour preference
 */
function formatTime(date, use24Hour = true) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    if (use24Hour) {
        return `${hours}:${minutes}:${seconds}`;
    } else {
        let displayHours = date.getHours();
        const ampm = displayHours >= 12 ? 'PM' : 'AM';
        displayHours = displayHours % 12 || 12;
        return `${String(displayHours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    }
}

/**
 * Format date as MM/DD/YYYY
 */
function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

/**
 * Get the current time in a specific timezone
 */
function getTimeInTimezone(timezoneName) {
    if (timezoneName === null) {
        // Local timezone
        return new Date();
    }

    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezoneName,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const parts = formatter.formatToParts(new Date());
        const values = {};
        
        parts.forEach(part => {
            values[part.type] = part.value;
        });

        const date = new Date();
        date.setHours(
            parseInt(values.hour),
            parseInt(values.minute),
            parseInt(values.second),
            0
        );

        return date;
    } catch (error) {
        console.error(`Error getting time for timezone ${timezoneName}:`, error);
        return new Date();
    }
}

/**
 * Update all clock displays
 */
function updateClocks() {
    Object.entries(timezones).forEach(([id, config]) => {
        const clockElement = document.getElementById(id);
        const dateElement = document.getElementById(`${id}-date`);

        if (clockElement && dateElement) {
            const dateInTimezone = getTimeInTimezone(config.name);
            clockElement.textContent = formatTime(dateInTimezone, is24HourFormat);
            dateElement.textContent = formatDate(dateInTimezone);
        }
    });
}

/**
 * Toggle between 12 and 24 hour format
 */
function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    updateClocks();
    
    const btn = document.getElementById('format-toggle');
    btn.textContent = is24HourFormat ? 'Toggle 12/24 Hour' : 'Toggle 12/24 Hour';
    
    // Visual feedback
    btn.style.opacity = '0.7';
    setTimeout(() => {
        btn.style.opacity = '1';
    }, 150);
}

/**
 * Initialize the clock application
 */
function initialize() {
    // Update clocks immediately
    updateClocks();

    // Update clocks every second
    setInterval(updateClocks, 1000);

    // Add event listeners
    document.getElementById('format-toggle').addEventListener('click', toggleTimeFormat);
    document.getElementById('refresh-btn').addEventListener('click', () => {
        updateClocks();
        // Visual feedback
        const btn = document.getElementById('refresh-btn');
        btn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            btn.style.transform = 'rotate(0deg)';
        }, 600);
    });
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', initialize);

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}