import { useEffect, useState } from "react"
import { Box, Typography, Stack } from "@mui/material"
import { SideBar, Videos } from "./index"

import { fetchFromApi } from "../utils/apiFetchdata"


const Feed = () => {
  //--- we want to get perticular category section data form api when we click to category so we need a state ;

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => { setVideos(data.items) })
  }, [selectedCategory]) // api call when page get load

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: "row" } }}>
      <Box
        sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

        <SideBar
          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
          {selectedCategory}
          <span style={{ marginLeft: '10px', color: "#F31503" }}>
            Videos
          </span>
        </Typography>

        {/* //--passing the videos as props */}
        <Videos videoData={videos} />

      </Box>

    </Stack>


  )
}

export default Feed