interface ServicePageProps {
  service: IServicesItemExpanded;
}
export const ServicePage = ({ service }: ServicePageProps) => {
  return (
    <>
      <h1>{service.data.title}</h1>
      <img src={service.data.image} alt={service.data.title} />
    </>
  );
};
