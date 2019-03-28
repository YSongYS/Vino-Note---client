import React from 'react'
import API from '../API'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

// props: all_logs
class CalendarLog extends React.Component {
    state = {
        today: new Date(),
        date: [
            { date: '2019-01-02', count: 2 },
            { date: '2019-02-04', count: 1 },
        ]
    }

    componentDidMount() {
        const userID = localStorage.getItem('user_id')
        const dateformatting = (date) => {
            return `${date.year}-${date.month}-${date.day}`
        }

        API.getLogDates(userID)
        .then(dates => 
            dates.forEach(date => {
                let count = dates.filter(d => d.day === date.day && d.month === date.month && d.year === date.year).length
                this.setState( {date: [...this.state.date, { date: date, count: count }]} )
                }   
            )
        )
        
    }
 
    classForValue = (value) => {
        if(!value) {
            return 'color-empty'
        } else if (value.count >= 4) {
            return `color-scale-4`
        }
        return `color-scale-${value.count}`
    }

    handleMouseOver = (value) => {
        if (value.date !== null) {
            return {
                'data-tip': `${value.date} : ${value.count} logs`
            }
        }
    }

    render() {
        return (
            <div>
                <CalendarHeatmap
                    startDate={new Date('2019-01-01')}
                    endDate={new Date('2019-09-31')}
                    values={this.state.date}
                    classForValue={this.classForValue}
                    // tooltipDataAttrs={(value) => this.handleMouseOver(value)}
                />
                 <ReactTooltip />
            </div>
        )
    }
}

export default CalendarLog
