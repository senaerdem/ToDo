import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const loginForm = [
    {
        id: 1,
        title: "E-mail Adress",
        icon: <Feather name="mail" size={24} color="black" />,
    },
    {
        id: 2,
        title: "Password",
        icon: <Ionicons name="key-outline" size={24} color="black" />,
        isSecure: true,
        secureIcon: {
            visible: <Ionicons name="eye-outline" size={24} color="black" />,
            notVisible: <Ionicons name="eye-outline" size={24} color="black" />,
        }
    }
];

export const registerForm = [
    {
        id: 1,
        title: "Name",
        icon: <Feather name="user" size={24} color="black" />,
    },
    {
        id: 2,
        title: "Last Name",
        icon: <Feather name="user" size={24} color="black" />,
    },
    {
        id: 3,
        title: "E-mail Adress",
        icon: <Feather name="mail" size={24} color="black" />,
    },
    {
        id: 4,
        title: "Password",
        icon: <Ionicons name="key-outline" size={24} color="black" />,
        isSecure: true,
        secureIcon: {
            visible: <Ionicons name="eye-outline" size={24} color="black" />,
            notVisible: <Ionicons name="eye-outline" size={24} color="black" />,
        },
    },
    {
        id: 5,
        title: "Re-password",
        icon: <Ionicons name="key-outline" size={24} color="black" />,
        isSecure: true,
        secureIcon: {
            visible: <Ionicons name="eye-outline" size={24} color="black" />,
            notVisible: <Ionicons name="eye-outline" size={24} color="black" />,
        },
    },
];