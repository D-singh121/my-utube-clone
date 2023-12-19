import { VideoCard, ChannelCard } from "./"
import { Box, Stack } from "@mui/material";


//---- accepting the videos as props
const Videos = ({ videoData ,direction }) => {
  console.log(videoData);
  // return (
  //   <>
  //     <Stack direction="row" flexWrap='wrap' justifyContent='start' gap={2}>
  //       {videoData.map((item, idx) => {
  //         <Box key={idx}>
  //           {/* //--> handling exception if we got videoId then we'll render videocard component and if we got channelid then we going to render the channelCard component */}
  //         console.log(item)
  //           {item.id.videoID && <VideoCard video={item} />}
  //           {item.id.channelID && <ChannelCard ChannelDetail={item} />}
  //         </Box>
  //       })} 
  //     </Stack>
  //   </>
  // )

  return (
    <Stack bgcolor="" direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
      {videoData.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;