* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 1200px;
}

h1 {
    text-align: center;
    color: white;
    margin-bottom: 40px;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.clock-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.clock-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    animation: fadeIn 0.6s ease-out;
}

.clock-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.clock-card.local {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.clock-card.local .city-name,
.clock-card.local .timezone,
.clock-card.local .date {
    color: white;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.city-name {
    font-size: 1.3em;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
}

.timezone {
    font-size: 0.85em;
    color: #666;
    margin-bottom: 15px;
    font-weight: 500;
}

.digital-clock {
    font-family: 'Courier New', monospace;
    font-size: 2.5em;
    font-weight: bold;
    color: #667eea;
    text-align: center;
    margin: 15px 0;
    letter-spacing: 2px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-variant-numeric: tabular-nums;
}

.clock-card.local .digital-clock {
    color: white;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.date {
    font-size: 0.9em;
    color: #999;
    text-align: center;
    font-weight: 500;
}

.controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
    flex-wrap: wrap;
}

.btn {
    background: white;
    color: #667eea;
    border: 2px solid white;
    padding: 12px 30px;
    font-size: 1em;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
    transform: translateY(0);
}

.info {
    text-align: center;
    color: white;
    font-size: 0.95em;
    margin-top: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
    h1 {
        font-size: 1.8em;
        margin-bottom: 25px;
    }

    .clock-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    .digital-clock {
        font-size: 2em;
    }

    .clock-card {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.5em;
    }

    .clock-grid {
        grid-template-columns: 1fr;
    }

    .digital-clock {
        font-size: 1.8em;
    }

    .btn {
        padding: 10px 20px;
        font-size: 0.9em;
    }
}