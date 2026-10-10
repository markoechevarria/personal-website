export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-text mb-2">About</h2>
          <p className="text-text-muted leading-relaxed">
            I'm a Systems Engineering student at Universidad Nacional Mayor de San Marcos,
            currently in my final semester. I specialize in building and maintaining data
            pipelines — orchestrating workflows with Apache Airflow, processing data with
            PySpark and Pandas on Databricks, and implementing data lineage with DataHub.
          </p>
          <p className="text-text-muted leading-relaxed mt-4">
            My full-stack development background (Angular, NestJS, .NET, FastAPI) helps me
            understand where data comes from and how the systems that produce it behave.
          </p>
        </div>
      </div>
    </section>
  )
}
