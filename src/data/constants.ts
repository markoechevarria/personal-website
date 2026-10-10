import { ComponentType } from 'react'
import { GitHubIcon, LinkedInIcon, EmailIcon, Logo } from '../icons'

export type IconProps = {
  className?: string
}

export type Icon = ComponentType<IconProps>

export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: Icon
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  description: string[]
}

export type Project = {
  title: string
  description: string
  tech: string[]
  repoUrl: string
}

export type EducationEntry = {
  institution: string
  degree: string
  period: string
  description: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/markoechevarria',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marko-echevarria-narrea',
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:markofidel10@gmail.com',
    icon: EmailIcon,
  },
]

export { Logo }

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data Engineering',
    items: ['Apache Airflow', 'PySpark', 'Databricks', 'DataHub', 'Pandas', 'NumPy', 'Scikit-Learn', 'Power BI'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'S3', 'Aurora RDS', 'EC2', 'CloudFormation', 'Docker', 'Kubernetes', 'Linux', 'Git', 'Okta'],
  },
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Kotlin', 'C#'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'React', 'Next.js', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'NestJS', 'Express.js', '.NET/C#'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB'],
  },
  {
    category: 'Mobile',
    items: ['Kotlin', 'Jetpack Compose'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Freelance Data Engineer',
    company: 'Freelance',
    period: 'April 2026 — Present',
    location: 'Lima, Perú',
    description: [
      'Maintained existing Apache Airflow DAGs and implemented new DAGs for data-flow orchestration.',
      'Integrated Airflow with AWS Secrets Manager for credential management and Okta for authentication.',
      'Implemented data lineage for Airflow pipelines using DataHub.',
      'Designed a pricing-prediction system based on historical registry similarity using PySpark and Pandas in Databricks.',
      'Maintained and troubleshot Databricks pipelines integrated with Amazon S3, Aurora RDS, and Google Cloud Storage.',
    ],
  },
  {
    role: 'IT Intern — Development & Data Analytics',
    company: 'Newport Capital',
    period: 'October 2025 — April 2026',
    location: 'Lima, Perú',
    description: [
      'Developed features, fixed bugs, and maintained internal apps across frontend (Angular) and backend (.NET/C#, Next.js).',
      'Managed end-to-end development of a casino games management application — requirements, meetings, DB modeling, full-stack dev.',
      'Designed automation to load, process, and cross-reference CSV data into SQL Server.',
      'Built an OCR extraction pipeline using a Meta OCR model and a local LLM (Ollama) to validate data before storage.',
    ],
  },
  {
    role: 'Programming Instructor',
    company: 'Academia Alpha',
    period: 'November 2024 — June 2025',
    location: 'Lima, Perú',
    description: [
      'Taught C++ and Python courses, alongside relational and non-relational database fundamentals using SQL Server and MongoDB.',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'AURORA',
    description:
      'Cloud-native distributed data processing platform on Kubernetes. Integrates Apache Airflow for orchestration, Apache Spark for distributed processing, and Amazon S3 as object storage, with a full-stack restaurant management app (Wallpa Sua) as its data source.',
    tech: ['Kubernetes', 'Airflow', 'Spark', 'S3', 'Docker', 'PostgreSQL', 'TypeScript'],
    repoUrl: 'https://github.com/markoechevarria/aurora',
  },
  {
    title: 'Tecnisis',
    description:
      'Mobile app and backend for managing artwork solicitations and expert evaluations. Frontend in Kotlin/Jetpack Compose with MVVM, Hilt, and Firebase. Backend REST API in Python/FastAPI/Pydantic/SQLAlchemy/PostgreSQL with JWT auth and role-based access.',
    tech: ['Kotlin', 'Jetpack Compose', 'FastAPI', 'PostgreSQL', 'Pydantic', 'Firebase'],
    repoUrl: 'https://github.com/markoechevarria/tecnisis',
  },
  {
    title: 'Movies Prediction',
    description:
      'Web application that recommends movies using Singular Value Decomposition (SVD). Users rate 5 movies and receive personalized recommendations. Supports real-time model retraining and evaluates performance with RMSE and MAE.',
    tech: ['Python', 'FastAPI', 'SVD', 'Scikit-Learn'],
    repoUrl: 'https://github.com/markoechevarria/movies-prediction',
  },
  {
    title: 'DNI Detection',
    description:
      'Python desktop app that extracts and structures information from Peruvian Identity Documents using doctr OCR and a local LLM (Ollama/Llama3). Features a Tkinter GUI with image preview and structured JSON output.',
    tech: ['Python', 'Tkinter', 'doctr', 'Ollama', 'Llama3'],
    repoUrl: 'https://github.com/markoechevarria/dni-detection',
  },
  {
    title: 'OmniAsset',
    description:
      'Full-stack corporate asset management system. Flask REST API backend with JWT auth, React/TypeScript frontend with Tailwind CSS, and PostgreSQL with automated audit logging for asset lifecycle tracking.',
    tech: ['Python', 'Flask', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/markoechevarria/omni-asset',
  },
  {
    title: 'Analytic Dash',
    description:
      'Collection of interactive analytical dashboards built with Python Dash and Plotly. Includes histograms, pie charts, treemaps, geo-scatter maps, and bubble charts with multi-page support and real-time callback updates.',
    tech: ['Python', 'Dash', 'Plotly', 'Bootstrap'],
    repoUrl: 'https://github.com/markoechevarria/analytic-dash',
  },
  {
    title: 'Math to ML',
    description:
      'Implementations of the mathematical foundations of machine learning — Linear Algebra, Calculus, Statistics, and Probability — plus ML algorithms built from scratch using NumPy, Pandas, Matplotlib, and Seaborn.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    repoUrl: 'https://github.com/markoechevarria/math-to-ml',
  },
  {
    title: 'Neuronal Network',
    description:
      'A feedforward neural network built from scratch using only NumPy. Implements forward and backward propagation with configurable layers, activation functions, and gradient descent optimization.',
    tech: ['Python', 'NumPy'],
    repoUrl: 'https://github.com/markoechevarria/neuronal-network',
  },
  {
    title: 'GitPy',
    description:
      'A Version Control System written in Python, implementing core Git functionality from scratch including init, add, commit, and checkout commands.',
    tech: ['Python'],
    repoUrl: 'https://github.com/markoechevarria/gitpy',
  },
  {
    title: 'Data Engineering Roadmap',
    description:
      'Comprehensive learning repository documenting my journey through a structured data engineering roadmap — Python, SQL, Linux, Docker, data modeling, and more.',
    tech: ['Python', 'SQL', 'Docker', 'Linux', 'Bash'],
    repoUrl: 'https://github.com/markoechevarria/data-engineering',
  },
]

export const education: EducationEntry[] = [
  {
    institution: 'Universidad Nacional Mayor de San Marcos',
    degree: 'Bachelor of Systems Engineering (10th semester)',
    period: '2022 — Present',
    description: 'Major in Systems Engineering with focus on software development, databases, and data engineering.',
  },
  {
    institution: 'GEM Educa Peru',
    degree: 'Data Science International Program',
    period: '2024 — 2025',
    description: 'Intensive program covering data science, machine learning, and analytics using Python and modern tools.',
  },
]
