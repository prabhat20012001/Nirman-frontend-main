import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ControlledAccordions({ children, Head }) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion sx={{"& hr":{display:"none"}}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                sx={{border:"none"}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                
                >
                    <Typography sx={{ width: '70%', flexShrink: 0 }}>
                        {Head}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails width={"100%"} >
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}