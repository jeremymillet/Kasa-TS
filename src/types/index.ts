export type HostType = {
  name: string;
  picture: string;
};

export type LodgingType = {
  id: string;
  title: string;
  location: string;
  tags: Array<string>;
  host: HostType;
  rating: string;
  description: string;
  equipments: Array<string>;
  pictures: Array<string>;
};
