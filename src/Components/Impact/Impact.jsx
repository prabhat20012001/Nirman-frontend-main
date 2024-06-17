import { Box } from "@mui/system";
import { useContext } from "react";
import React from "react";
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import ImpactCard from "./ImpactCard";
export default function Impact() {
  let { images } = useContext(Context);
  return (
    <Box
      width={"100%"}
      minHeight={"500px"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      gap={"20px"}
      flexDirection={"column"}
    >
      <Typography
        fontWeight={"900"}
        fontSize={"40px"}
        m={"20px 0"}
        color={"rgb(86, 79, 164)"}
      >
        Impact
      </Typography>
      <Box
        width={["90%", "85%", "80%"]}
        display={"flex"}
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"center"}
        alignContent={"flex-start"}
      >
        <Typography variant="h4" fontWeight={700}>
          <em>Empowering Youth and Communities: Nirman's Impact</em>
          <br />
        </Typography>
        <Typography
          fontWeight={"bold"}
          fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}
        >
          

Nirman, a stalwart civil society organization entrenched in Bihar since 1995, stands as a beacon of change for the marginalized strata of society. With a robust network comprising 22 civil society organizations, Nirman diligently strives towards elevating Human Development Index indicators, particularly in Education, Health, and Social Status. Over its 25-year journey, Nirman has etched a distinctive niche through its relentless efforts in the grassroots arena.
<br />
At the heart of Nirman's philosophy lies a holistic approach towards community development. By addressing not only Education and Health but also delving into Gender issues, Nirman ensures a comprehensive upliftment strategy. Acting as a conduit between the state government and beneficiaries, Nirman facilitates the seamless execution of various welfare programs tailored for the marginalized populace.
<br />

Central to Nirman's ethos is the cultivation of youth and civil society leadership. Through meticulously crafted networks spanning from District to Panchayat levels, Nirman fosters an environment ripe for dynamic interventions in the development sector. Emphasizing inclusivity, each network boasts a diverse composition, including female representation at its core.
<br />

Nirman's journey is marked by advocacy and action. From grassroots mobilization to advocacy at governmental and media forums, Nirman champions the cause of social justice and equitable access to government schemes. Recognizing the pivotal role of community participation, Nirman endeavors to break barriers of caste, creed, religion, and gender to usher in sustainable development.
<br />

In regions like Patna, Vaishali, Arwal, and Nalanda, Nirman's impact reverberates profoundly. With a steadfast focus on Education, Livelihood, Gender equality, and Health, Nirman continues to spearhead transformative initiatives for the underprivileged. Anchored by expertise in adolescent education, skill training, and social mobilization, Nirman remains steadfast in its commitment to nurturing empowered communities and fostering sustainable progress.
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
}
