import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
	// console.log(video);
	return (
		<Card sx={{ width: { md: '320px', xs: '100%', sm: '358px' }, boxShadow: "none", borderRadius: 0 }}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
					sx={{ height: 180, width: 'cover' }}
				/>
				<CardContent sx={{ backgroundColor: '#1e1e1e', height: "80px" }}>
					<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
						<Typography
							textOverflow="hidden"
							variant="subtitle1" fontWeight="bold"
							color='#fff'>
							{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
						</Typography>
					</Link>

					<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
						<Typography
							// textOverflow="hidden"
							variant="subtitle1" fontWeight="bold"
							color='grey'>
							{snippet?.channelTitle || demoChannelTitle}
							<CheckCircleIcon
								sx={{ fontSize: 16, ml: "5px", color: 'grey', }}
							/>
						</Typography>
					</Link>
				</CardContent>
			</Link>
		</Card>
	)
}

export default VideoCard