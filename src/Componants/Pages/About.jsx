import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import TeamUser from "./TeamUser";

const data = [
  {
    name: "Vikash Kumar Lal",
    type: "Problem Solver",
    url: "https://avatars.githubusercontent.com/u/105917542?v=4",
    github: "https://github.com/Therobo77",
    linkedin: "https://www.linkedin.com/in/vikashlal7722/",
    portfolio: "https://therobo77.github.io/",
  },
  {
    name: "Nitesh Sindhu",
    type: "Backend Expert",
    url: "https://avatars.githubusercontent.com/u/88618256?v=4",
    github: "https://github.com/NiteshSindhu",
    linkedin: "https://www.linkedin.com/in/nitesh-sindhu-150473203/",
    portfolio: "https://niteshsindhu.github.io/",
  },
  {
    name: "Nitesh Sindhu",
    type: "Backend Expert",
    url: "https://avatars.githubusercontent.com/u/88618256?v=4",
    github: "https://github.com/NiteshSindhu",
    linkedin: "https://www.linkedin.com/in/nitesh-sindhu-150473203/",
    portfolio: "https://niteshsindhu.github.io/",
  },

  {
    name: "Rajnandani Kumari",
    type: "UI expert",
    url: "https://avatars.githubusercontent.com/u/50689413?v=4",
    github: "https://github.com/Raj210Kumari",
    linkedin: "https://www.linkedin.com/in/k-rajnandani210/",
    portfolio: "https://raj210kumari.github.io/",
  },

  {
    name: "Shobha Malviya",
    type: "UI DESIGNER",
    url: "https://avatars.githubusercontent.com/u/101391214?v=4",
    github: "https://github.com/shobhamalviya",
    linkedin: "https://www.linkedin.com/404/",
    portfolio: "https://shobhamalviya.github.io/",
  },
];

const About = () => {
  return (
      <>
          <Navbar/>
      <VStack p={50}>
        <Text fontWeight={"semibold"} fontSize={{ base: "18px", md: "2xl" }}>
          Our Creative Team
        </Text>

        <Stack direction={{ base: "column", md: "row" }} spacing={5}>
          {data.map((el) => (
            <TeamUser data={el} />
          ))}
        </Stack>
          </VStack>
          <Footer/>
    </>
  );
};

export default About;
