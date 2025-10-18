export type TransmissonType =
  | "MANUAL"
  | "AUTOMATIC"
  | "SEMI_AUTOMATIC"
  | "CVT"
  | "DUAL_CLUCTH";

export type FuelType =
  | "PETROL"
  | "DIESEL"
  | "ELECTRIC"
  | "HYBRID"
  | "CNG"
  | "LPG";
export type BodyType =
  | "SEDAN"
  | "SUV"
  | "HATCHBACK"
  | "COUPE"
  | "CONVERTIBLE"
  | "WAGON"
  | "VAN"
  | "PICKUP"
  | "MINIVAN"
  | "ROADSTER"
  | "LIMOUSINE"
  | "OFF_ROAD"
  | "MICROCAR";

export type DriveType = "FWD" | "RWD" | "AWD" | "FOUR_WHEEL";
export type Condition = "NEW" | "USED" | "CERTIFIED_PRE_OWNED";
export type AirConditioning =
  | "MANUAL"
  | "AUTOMATIC"
  | "DUAL_ZONE"
  | "MULTI_ZONE"
  | "NONE";

export type EngineType =
  | "INLINE"
  | "V_TYPE"
  | "BOXER"
  | "ROTARY"
  | "ELECTRIC"
  | "HYBRID";

export interface Car {
  id: string;
  carModel: string;
  builtYear: number;
  price: string;
  currency: string;
  color: string;
  transmission: TransmissonType;
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
  image: string[];
  createdAt: string;
  updatedAt: string;
  carBrand: string;
  horsePower: number;
  engineType: EngineType;
  engineDisplacement: number;
}
export interface PaginatedCarResponse {
  ok: boolean;
  message: string;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  data: Car[];
}
