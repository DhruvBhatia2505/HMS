import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { HourglassEmpty, Cancel, CheckCircle } from '@mui/icons-material';

const UserAppointment = () => {
    const { isAuthenticated, user } = useContext(Context);
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAppointments = async () => {
            if (!isAuthenticated) {
                setError("Please log in to view your appointments.");
                return;
            }
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/appointment/getall",
                    { withCredentials: true }
                );

                const userAppointments = await data.appointments.filter(
                    (appointment) => appointment.email === user.email
                );
                setAppointments(userAppointments);
            } catch (error) {
                console.error("Error fetching appointments:", error);
                setError("Failed to fetch appointments.");
                setAppointments([]);
            }
        };
        fetchAppointments();
    }, [isAuthenticated, user.email]);
    const StatusIcons = (status) => {
        switch (status) {
            case 'Pending':
                return <HourglassEmpty style={{ color: '#FFA500' }} />;
            case 'Rejected':
                return <Cancel style={{ color: 'crimson' }} />;
            case 'Accepted':
                return <CheckCircle style={{ color: 'green' }} />;
            default:
                return null;
        }
    };
    return (<div className="container">
        <div className="banner">
            <h1>My Appoinments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 ? (
                        appointments.map((appointment) => (
                            <tr key={appointment._id}>
                                <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                                <td>{new Date(appointment.appointment_date).toLocaleDateString()}</td>
                                <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                                <td>{appointment.department}</td>
                                <td style={{ display: "flex", alignItems: "center" }}>
                                    {appointment.status} {StatusIcons(appointment.status)}
                                </td>
                            </tr>
                        ))
                    ) : isAuthenticated ? (
                        <tr>
                            <td colSpan="6">No Appointments Found!</td>
                        </tr>
                    ) : <tr>
                        <td colSpan="6">Please Login to view your appointments!</td>

                    </tr>}
                </tbody>
            </table>
        </div>
    </div>)
}

export default UserAppointment;