import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./test1.scss";

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


const Test1 = () => {
  return (
    <div className="test1">
      <Sidebar />
      <div className="test1Container">
        <Navbar />
          {/********************************************************************/}
          <Card >
            <div>
              <Typography level="title-lg">Project Title</Typography>              
              <Typography level="body-sm">Project Location</Typography>
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
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
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
                  Auunal ROI
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
                Invest
              </Button>
              <Button variant="solid" color="primary">
                Learn More
              </Button>
            </Box>
            </CardContent>
          </Card>
          </div>
        </div>
  );
};

export default Test1;
