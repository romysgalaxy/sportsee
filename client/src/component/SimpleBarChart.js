import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class SimpleBarChart extends PureComponent {

  render() {
    const { sessions } = this.props; // Assumez que vous passerez les données sessions en tant que props
    console.log('sessions', sessions)
    const data = sessions.map(session => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
    console.log('data', data)


    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}