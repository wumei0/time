# 🕐 Multi-Timezone Digital Clock

A beautiful, responsive digital clock application that displays the current time in different time zones around the world.

## ✨ Features

- **8 Different Time Zones**: New York, London, Paris, Tokyo, Sydney, Dubai, Singapore, and São Paulo
- **Local Time Display**: Shows your device's local time highlighted specially
- **12/24 Hour Toggle**: Switch between 12-hour (with AM/PM) and 24-hour format
- **Date Display**: Shows date in MM/DD/YYYY format for each timezone
- **Real-Time Updates**: Updates every second automatically
- **Responsive Design**: Works great on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient backgrounds, smooth animations, and hover effects
- **Manual Refresh**: Button to manually refresh the time display

## 🚀 Quick Start

### Method 1: Direct Browser Access
1. Download or clone this repository
2. Open `index.html` in your web browser
3. The clocks will start displaying and update automatically

### Method 2: Live Server (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/wumei0/digital-clock-project.git
   cd digital-clock-project
   ```
2. Install a live server (e.g., using VS Code Live Server extension)
3. Open the project with live server
4. The application will automatically reload on file changes

## 📁 Project Structure

```
digital-clock-project/
├── index.html      # Main HTML file with clock cards
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality and timezone handling
└── README.md       # Documentation
```

## 🕰️ Supported Time Zones

| City | Timezone | Offset |
|------|----------|--------|
| 🗽 New York | EST/EDT | UTC-5/-4 |
| 🇬🇧 London | GMT/BST | UTC+0/+1 |
| 🇫🇷 Paris | CET/CEST | UTC+1/+2 |
| 🗾 Tokyo | JST | UTC+9 |
| 🇦🇺 Sydney | AEDT/AEST | UTC+10/+11 |
| 🇦🇪 Dubai | GST | UTC+4 |
| 🇸🇬 Singapore | SGT | UTC+8 |
| 🇧🇷 São Paulo | BRT/BRST | UTC-3/-2 |
| 📍 Local | Your Timezone | Local |

## 💻 How to Use

1. **View Current Time**: The clocks automatically display the current time in each timezone
2. **Toggle Time Format**: Click the "Toggle 12/24 Hour" button to switch between formats
3. **Manual Refresh**: Click "Refresh Now" to manually update all displays

## 🎨 Customization

### Adding More Time Zones

1. Open `script.js`
2. Add a new entry to the `timezones` object:
   ```javascript
   'hong kong': { name: 'Asia/Hong_Kong', label: 'Hong Kong' }
   ```
3. Add a corresponding clock card in `index.html`:
   ```html
   <div class="clock-card">
       <div class="city-name">🇭🇰 Hong Kong</div>
       <div class="timezone">HKT (UTC+8)</div>
       <div class="digital-clock" id="hongkong">00:00:00</div>
       <div class="date" id="hongkong-date">--/--/----</div>
   </div>
   ```

### Changing Colors

Edit the gradient in `style.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adjusting Update Frequency

In `script.js`, modify the interval (currently 1000ms):
```javascript
setInterval(updateClocks, 1000); // Change 1000 to your preferred milliseconds
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup for structure
- **CSS3**: Responsive grid layout, animations, and gradients
- **JavaScript (ES6+)**: Timezone handling using Intl API

### Browser Compatibility
- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ⚠️ Limited support (no CSS Grid)

## 📱 Responsive Design

The application automatically adapts to different screen sizes:
- **Desktop** (1200px+): 3-column grid layout
- **Tablet** (768px-1199px): 2-column grid layout
- **Mobile** (<768px): Single column layout

## 🔐 Privacy

This application runs entirely in your browser. No data is sent to any server, and no personal information is collected.

## 📚 API Reference

### `formatTime(date, use24Hour)`
Formats a Date object into a time string.

**Parameters:**
- `date` (Date): The date object to format
- `use24Hour` (Boolean): If true, uses 24-hour format; otherwise 12-hour with AM/PM

**Returns:** Formatted time string (e.g., "14:30:45" or "02:30:45 PM")

### `formatDate(date)`
Formats a Date object into a date string.

**Parameters:**
- `date` (Date): The date object to format

**Returns:** Formatted date string (e.g., "03/19/2026")

### `getTimeInTimezone(timezoneName)`
Gets the current time in a specific timezone.

**Parameters:**
- `timezoneName` (String): IANA timezone name (e.g., "America/New_York") or null for local time

**Returns:** Date object adjusted to the specified timezone

### `updateClocks()`
Updates all clock displays with the current time.

### `toggleTimeFormat()`
Toggles between 12-hour and 24-hour time format.

## 🐛 Troubleshooting

### Clocks show "00:00:00"
- Ensure JavaScript is enabled in your browser
- Check the browser console for error messages (F12)
- Verify the HTML file references the correct CSS and JS files

### Times don't update
- Refresh the page (F5 or Cmd+R)
- Check if JavaScript is running (open DevTools)
- Ensure your system time is correct

### Timezone is incorrect
- Verify your system timezone settings
- Different browsers may handle DST (Daylight Saving Time) differently
- If issues persist, check [IANA Timezone Database](https://www.iana.org/time-zones)

## 🚀 Future Enhancements

- [ ] Add more time zones
- [ ] Add timezone search/filter functionality
- [ ] Add analog clock option
- [ ] Add sound notifications for specific times
- [ ] Add timezone converter tool
- [ ] Add settings to customize display preferences
- [ ] Add dark/light theme toggle
- [ ] Add calendar view

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by **wumei0**

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💡 Tips & Tricks

- **Keyboard Shortcut**: You can add keyboard shortcuts by modifying the JavaScript
- **Local Storage**: Add timezone preferences that persist across sessions
- **Notifications**: Implement browser notifications for specific times
- **World Map**: Display a world map with timezone regions

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Open an [Issue](https://github.com/wumei0/digital-clock-project/issues)
3. Check existing issues for solutions

## 🌟 Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking the project
- 💬 Sharing feedback and suggestions
- 🐛 Reporting bugs

---

**Last Updated**: March 19, 2026  
**Version**: 1.0.0
