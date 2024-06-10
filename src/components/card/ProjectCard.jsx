import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import ShareIcon from '@mui/icons-material/Share';

import { useEffect, useState } from "react";
import axios from "axios";

const ProjectCard = () => {
    const [project, setProject] = useState([]);

    const fetchData = async () => {
        try {
          const { data } = await axios.get("/projects");
          setProject(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

        useEffect(() => {
            fetchData();
        }, []);


    return (
        <div className="test1Container">
            {/********************************************************************/}
            {project.map((project) =>(
                <Card >
                <div key={project._id} >
                <Typography level="title-lg">{project.projectname}</Typography>              
                <Typography level="body-sm">{project.location}</Typography>
                <Typography level="body-sm">Project Ended in 30 days</Typography>
                <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem'  }}
                >
                    <BookmarkAdd />
                    <ShareIcon/>
                </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={project.photos}
                    loading="lazy"
                    alt=""
                />
                </AspectRatio>
                {/***********************************************************************************************/}
                <CardContent orientation="vertical">
                <Sheet
                sx={{
                    bgcolor: 'background.level1',
                    borderRadius: 'sm',
                    p: 1.5,
                    my: 1.5,
                    display: 'flex',
                    gap: 2,
                    '& > div': { flex: 1 },
                }}
                >
                <div>
                    <Typography level="body-xs" fontWeight="lg">
                    Aunnal ROI
                    </Typography>
                    <Typography fontWeight="lg">10%</Typography>
                </div>
                <div>
                    <Typography level="body-xs" fontWeight="lg">
                    Investor
                    </Typography>
                    <Typography fontWeight="lg">980</Typography>
                </div>
                <div>
                    <Typography level="body-xs" fontWeight="lg">
                    Goal (MYR)
                    </Typography>
                    <Typography fontWeight="lg"> 1000000</Typography>
                </div>
                </Sheet>
                {/*******************************************************************/}
                <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant="outlined" color="neutral">
                    Learn More
                </Button>
                <Button variant="solid" color="primary">
                    Invest
                </Button>
                </Box>
                </CardContent>
                </Card>
            ))}                
            </div>
      );
}

export default ProjectCard
