export const options = [
  {
    value: "trivandrum",
    label: "Trivandrum",
    places: [
      { label: "Varkala", value: "varkala" },
      { label: "Edava", value: "edava" },
      { label: "Navaikulam", value: "navaikulam" },
      { label: "Chirayinkeezhu", value: "chirayinkeezhu" },
      { label: "Attingal", value: "attingal" },
      { label: "Kilimanoor", value: "kilimanoor" },
      { label: "Vakkom", value: "vakkom" },
      { label: "Kazhakootam", value: "kazhakootam" },
      { label: "Sreekariyam", value: "sreekariyam" },
      { label: "Ullor", value: "ullor" },
      { label: "Pattom", value: "pattom" },
      { label: "Veli", value: "veli" },
    ],
  },
  {
    value: "kollam",
    label: "Kollam",
    places: [
      { label: "Oachira", value: "oachira" },
      { label: "Karunagapally", value: "karunagapally" },
      { label: "Chavara", value: "chavara" },
      { label: "Thazhava", value: "thazhava" },
      { label: "Kulashekharapuram", value: "kulashekharapuram" },
      { label: "Thevalakara", value: "thevalakara" },
      { label: "Clappana", value: "clappana" },
    ],
  },
  {
    value: "pathanamthitta",
    label: "Pathanamthitta",
    places: [
      { label: "Thiruvalla", value: "thiruvalla" },
      { label: "Pandalam", value: "pandalam" },
      { label: "Parumala", value: "parumala" },
      { label: "Parumala", value: "parumala" },
      { label: "Kadapra", value: "kadapra" },
      { label: "Kumbanad", value: "kumbanad" },
      { label: "Kuttoor", value: "kuttoor" },
      { label: "Kaviyoor", value: "kaviyoor" },
      { label: "Nedupram", value: "nedupram" },
    ],
  },
  { value: "alappuzha", label: "Alappuzha", places: [
    { label: "Parumala", value: "parumala"}
] },
  { value: "kottayam", label: "Kottayam", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "idukki", label: "Idukki", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "ernakulam", label: "Ernakulam", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "thrissur", label: "Thrissur", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "palakkad", label: "Palakkad", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "malappuram", label: "Malappuram", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "kozhikode", label: "Kozhikode", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "wayanad", label: "Wayanad", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "kannur", label: "Kannur", places: [{ label: "Parumala", value: "parumala"}] },
  { value: "kasaragod", label: "Kasaragod", places: [{ label: "Parumala", value: "parumala"}] },
];
export type OptionType = {
  label: string;
  value: string;
  places?:{
    label: string;
  value: string;
  }[]
};
