export default interface Vehicle {
    id: String;
    modelYear: String;
    url?: String;
    media?: [{
      name: String;
      url: String;
    }];
    description: String;
    price: String;
    meta: {
      passengers: Number;
      drivetrain: Object;
      bodystyles: Object;
      emissions: {
        template: String;
        value: Number;
      };
    };
}
