export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
  createdCars: Car[];
};
export type Car = {
  id: string;
  carModel: string;
  builtYear: number;
  price: number;
  currency: string;
  color: string;
  transmission: TransmissionType;
  fuelType: FuelType;
  mileage: number;
  mileageValue: string;
  bodyType: BodyType;
  driveType: DriveType;
  condition: Condition;
  doors: number;
  seats: number;
  airConditioning: AirConditioning;
  description: string;
  engineType: EngineType;
  engineDisplacement: number;
  horsePower: number;
  image: string[];
  indoorExtras: string[];
  outDoorExtras: string[];

  carBrand: string;
};

export enum Role {
  USER,
  ADMIN,
}
export enum TransmissionType {
  MANUAL,
  AUTOMATIC,
  SEMI_AUTOMATIC,
  CVT,
  DUAL_CLUTCH,
}
export enum FuelType {
  PETROL,
  DIESEL,
  ELECTRIC,
  HYBRID,
  CNG,
  LPG,
}
export enum BodyType {
  SEDAN,
  SUV,
  HATCHBACK,
  COUPE,
  CONVERTIBLE,
  WAGON,
  VAN,
  PICKUP,
  MINIVAN,
  ROADSTER,
  LIMOUSINE,
  OFF_ROAD,
  MICROCAR,
}
export enum DriveType {
  FWD,
  RWD,
  AWD,
  FOUR_WHEEL,
}
export enum Condition {
  NEW,
  USED,
  CERTIFIED_PRE_OWNED,
}
export enum AirConditioning {
  MANUAL,
  AUTOMATIC,
  DUAL_ZONE,
  MULTI_ZONE,
  NONE,
}
export enum EngineType {
  INLINE,
  V_TYPE,
  BOXER,
  ROTARY,
  ELECTRIC,
  HYBRID,
}
