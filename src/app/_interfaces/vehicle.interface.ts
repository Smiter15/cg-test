export default interface Vehicle {
    id: String;
    modelYear: String;
    url?: String;
    media?: [{
      name: String;
      url: String;
    }];
}
