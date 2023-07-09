"use client"
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
    trip: Trip
}

const TripReservation = (trip: TripReservationProps) => {
    return (
        <div>
            <div className="flex flex-col px-5 ">
                <div className="flex gap-4">
                    <DatePicker placeholderText="Data de Inicio" onChange={() => { }} className="w-full" />
                    <DatePicker placeholderText="Data Final" onChange={() => { }} className="w-full" />
                </div>

                <Input placeholder={`Número de hóspedes(max: ${trip.maxGuests})`} className="mt-4" />

                <div className="flex justify-between mt-3">
                    <p className="font-medium text-sm primaryDarker">Total</p>
                    <p className="font-medium text-sm primaryDarker">R$ 2500</p>
                </div>

                <div className="pb-10 border-b border-grayLighter w-full">
                    <Button className="mt-3 w-full">Reservar agora</Button>
                </div>
            </div>
        </div>
    );
};

export default TripReservation