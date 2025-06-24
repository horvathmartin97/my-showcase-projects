import {
  Appointment,
  DayOff,
  Service,
  WeeklyDayOff,
  WorkHour,
} from "@prisma/client";
import prisma from "../utils/prisma";
import { createWorkHour } from "./providerSchema";
import { ServiceInput } from "./providerTypes";
import HttpError from "../utils/HttpError";
import { AppointmentWithClient } from "../types/global";

const providerService = {
  createWorkHour: async (
    providerId: string,
    workHours: { dayOfWeek: number; startTime: string; endTime: string }[]
  ): Promise<WorkHour[]> => {
    await prisma.workHour.deleteMany({
      where: { providerId },
    });

    await prisma.workHour.createMany({
      data: workHours.map((wh) => ({
        providerId,
        dayOfWeek: wh.dayOfWeek,
        startTime: wh.startTime,
        endTime: wh.endTime,
      })),
    });

    return prisma.workHour.findMany({ where: { providerId } });
  },
  addDayOff: async (
    providerId: string,
    date: Date,
    reason?: string
  ): Promise<DayOff> => {
    return prisma.dayOff.create({
      data: {
        providerId,
        date,
        reason,
      },
    });
  },
  setWeeklyDayOffs: async (
    providerId: string,
    day: number[],
    reason?: string
  ): Promise<WeeklyDayOff[]> => {
    await prisma.weeklyDayOff.deleteMany({ where: { providerId } });

    await prisma.weeklyDayOff.createMany({
      data: day.map((dayOfWeek) => ({
        providerId,
        dayOfWeek,
        reason,
      })),
    });
    return prisma.weeklyDayOff.findMany({ where: { providerId } });
  },
  createService: async (
    providerId: string,
    service: ServiceInput
  ): Promise<Service> => {
    const provider = await prisma.provider.findUnique({
      where: { id: providerId },
    });
    if (!provider) {
      throw new HttpError(404, "Provider does not exist");
    }

    const newService = await prisma.service.create({
      data: {
        name: service.name,
        durationMin: service.durationMin,
        providerId,
        price: service.price,
        currency: service.currency,
      },
    });

    return newService;
  },
  acceptAppointment: async (appointmentId: string): Promise<Appointment> => {
    const isExist = await prisma.appointment.findUnique({
      where: { id: appointmentId },
    });
    if (!isExist) {
      throw new HttpError(404, "Appointment not found");
    }
    return prisma.appointment.update({
      where: { id: appointmentId },
      data: { status: "CONFIRMED" },
    });
  },
  rejectAppointmnet: async (appointmentId: string): Promise<Appointment> => {
    const isExist = await prisma.appointment.findUnique({
      where: { id: appointmentId },
    });
    if (!isExist) {
      throw new HttpError(404, "Appointment not found");
    }
    return prisma.appointment.update({
      where: { id: appointmentId },
      data: { status: "CANCELLED" },
    });
  },
  getBookedAppointments: async (
    providerId: string
  ): Promise<AppointmentWithClient[]> => {
    const isAppointment = await prisma.provider.findUnique({
      where: { id: providerId },
    });
    if (!isAppointment) {
      throw new HttpError(404, "Provider is not found");
    }
    return prisma.appointment.findMany({
      where: { providerId },
      select: {
        id: true,
        clientId: true,
        serviceId: true,
        startsAt: true,
        endsAt: true,
        providerId: true,
        status: true,
        createdAt: true,
        client: {
          select: {
            id: true,
            name: true,
            email: true,
            appointments: true,
            role: true,
          },
        },
      },
    });
  },
};

export default providerService;
