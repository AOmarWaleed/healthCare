import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//! this to solve the conflict when u want to make reusable component 
//? like u have Button which received a className="bg-red-400" but , the Button already have class for bg so there is conflict to make sure u will always over-ride u will use the twMerge
//! about clsx its to conditionally add some classes but in obj syntax not like individual   
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


//! DeepCopy
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

//! like to preview an image 
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string) => {
    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
        month: "short", // abbreviated month name (e.g., 'Oct')
        day: "numeric", // numeric day of the month (e.g., '25')
        year: "numeric", // numeric year (e.g., '2023')
        hour: "numeric", // numeric hour (e.g., '8')
        minute: "numeric", // numeric minute (e.g., '30')
        hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    };

    const dateDayOptions: Intl.DateTimeFormatOptions = {
        weekday: "short", // abbreviated weekday name (e.g., 'Mon')
        year: "numeric", // numeric year (e.g., '2023')
        month: "2-digit", // abbreviated month name (e.g., 'Oct')
        day: "2-digit", // numeric day of the month (e.g., '25')
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
        month: "short", // abbreviated month name (e.g., 'Oct')
        year: "numeric", // numeric year (e.g., '2023')
        day: "numeric", // numeric day of the month (e.g., '25')
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric", // numeric hour (e.g., '8')
        minute: "numeric", // numeric minute (e.g., '30')
        hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    };

    const formattedDateTime: string = new Date(dateString).toLocaleString(
        "en-US",
        dateTimeOptions
    );

    const formattedDateDay: string = new Date(dateString).toLocaleString(
        "en-US",
        dateDayOptions
    );

    const formattedDate: string = new Date(dateString).toLocaleString(
        "en-US",
        dateOptions
    );

    const formattedTime: string = new Date(dateString).toLocaleString(
        "en-US",
        timeOptions
    );

    return {
        dateTime: formattedDateTime,
        dateDay: formattedDateDay,
        dateOnly: formattedDate,
        timeOnly: formattedTime,
    };
};



//! its just ezy way to encrypt and decrypt any think like pass
export function encryptKey(passkey: string) {
    return btoa(passkey);
}

export function decryptKey(passkey: string) {
    return atob(passkey);
}