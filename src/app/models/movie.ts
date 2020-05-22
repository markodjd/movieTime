export class Movie {
  _id: string;
  imdb_id: string;
  title: string;
  year: string;
  synopsis: string;
  runtime: string;
  released: number;
  certification: string;
  torrent1080pUrl: string;
  torrent1080pFileSize: string;
  torrent1080pSize: number;
  torrent1080pSeed: number;
  torrent1080pPeer: number;
  torrent720pUrl: string;
  torrent720pFileSize: string;
  torrent720pSize: number;
  torrent720pSeed: number;
  torrent720pPeer: number;
  trailer: string;
  genres: string[];
  poster: string;
  fanart: string;
  banner: string;
  percentage: number;
  watching: number;
  votes: number;
  loved: number;
  hated: number;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || "";
    this.imdb_id = (obj && obj.imdb_id) || "";
    this.title = (obj && obj.title) || "";
    this.year = (obj && obj.year) || "";
    this.synopsis = (obj && obj.synopsis) || "";
    this.runtime = (obj && obj.runtime) || "";
    this.released = (obj && obj.released) || 0;
    this.certification = (obj && obj.certification) || "";
    this.torrent1080pUrl = (obj && obj.torrents.en["1080p"].url) || "";
    this.torrent1080pFileSize =
      (obj && obj.torrents.en["1080p"].filesize) || "";
    this.torrent1080pSize = (obj && obj.torrents.en["1080p"].size) || 0;
    this.torrent1080pSeed = (obj && obj.torrents.en["1080p"].seed) || 0;
    this.torrent1080pPeer = (obj && obj.torrents.en["1080p"].peer) || 0;
    this.torrent720pUrl = (obj && obj.torrents.en["720p"].url) || "";
    this.torrent720pFileSize = (obj && obj.torrents.en["720p"].filesize) || "";
    this.torrent1080pSize = (obj && obj.torrents.en["720p"].size) || 0;
    this.torrent1080pSeed = (obj && obj.torrents.en["720p"].seed) || 0;
    this.torrent1080pPeer = (obj && obj.torrents.en["720p"].peer) || 0;
    this.trailer = (obj && obj.trailer) || "";
    this.genres = (obj && obj.genres) || [];
    this.poster = (obj && obj.images.poster) || "";
    this.fanart = (obj && obj.images.fanart) || "";
    this.banner = (obj && obj.images.banner) || "";
    this.percentage = (obj && obj.rating.percentage) || 0;
    this.watching = (obj && obj.rating.watching) || 0;
    this.votes = (obj && obj.rating.votes) || 0;
    this.loved = (obj && obj.rating.loved) || 0;
    this.hated = (obj && obj.rating.hated) || 0;
  }
}
