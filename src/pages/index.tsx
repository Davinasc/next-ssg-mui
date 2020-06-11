import { GetStaticProps } from "next";
import Link from "next/link";

import { Microphone } from "@/model/Microphone";
import { openDB } from "../openDB";

// Material UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export interface IndexProps {
  microphones: Microphone[] | undefined;
}

export default function Index({ microphones }: IndexProps) {
  return (
    <Grid container spacing={3}>
      {microphones?.map(({ id, brand, model, imageUrl }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <Link href="/microphone/[id]" as={`/microphone/${id}`}>
            <a>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={`${brand} ${model}`}
                    height="300"
                    image={imageUrl}
                    title={`${brand} ${model}`}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {`${brand} ${model}`}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const currentPage = ctx.params?.currentPage as string;
  const currentPageNumber = +(currentPage || 0);

  const min = currentPageNumber * 5;
  const max = (currentPageNumber + 1) * 5;

  const db = await openDB();
  const microphones = await db.all("select * from microphone where id between ? and ?", min, max);

  return { props: { microphones } };
};
