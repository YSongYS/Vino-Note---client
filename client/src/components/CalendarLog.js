import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';


class CalendarLog extends React.Component {
    state = {
        today: new Date(),
        date: [
            { date: '2019-01-02', count: 1 },
            { date: '2019-01-22', count: 4 },
            { date: '2019-01-30', count: 2 },
        ]
    }

    classForValue = (value) => {
        if(!value) {
            return 'color-empty'
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
                    endDate={new Date('2019-12-31')}
                    values={this.state.date}
                    classForValue={this.classForValue}
                    tooltipDataAttrs={(value) => this.handleMouseOver(value)}
                />
                 <ReactTooltip />

            </div>
        )
    }
}

export default CalendarLog