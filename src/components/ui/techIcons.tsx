import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiBitbucket,
  SiGithub,
  SiDotnet,
  SiAngular,
  SiPython,
  SiJavascript,
  SiFastify,
  SiSnowflake,
} from "react-icons/si"

import { FaDatabase, FaBrain, FaCloud } from "react-icons/fa"

export const techIconMap: Record<string, any> = {
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MySQL": SiMysql,
  "MS SQL": FaDatabase,
  "Azure": FaCloud,
  "Bitbucket": SiBitbucket,
  "GitHub": SiGithub,
  ".NET": SiDotnet,
  "Angular": SiAngular,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "Fastify": SiFastify,
  "Snowflake": SiSnowflake,
  "CQRS": FaBrain,
  "LLM": FaBrain,
  "AI/ML": FaBrain,
  "ABP Framework": FaBrain,
  "WebSockets": FaBrain,
}