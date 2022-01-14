export interface Game {
  id?: string | undefined;
  background_image?: string;
  name?: string;
  released?: string;
  metacritic_url?: string;
  website?: string;
  description?: string;
  metacritic?: number;
  genres?: Array<Genre>;
  parent_platforms?: Array<ParentPlatform>;
  publishers?: Array<Publishers>;
  ratings?: Array<Rating>;
  screenshots?: Array<Screenshots>;
  trailers?: Array<Trailers>;


}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {

  name: string | undefined;

}

interface ParentPlatform {
  platform: {
    // id : number;
    name: string | undefined;
    slug: string | undefined;
  }
}

interface Publishers {
  name: string | undefined;
}

interface Rating {
  id: number | undefined;
  count: number | undefined;
  title: string | undefined;
}

interface Screenshots {
  image: string | undefined;
}

interface Trailers {
  data: {
    max: string;
  };
}
