import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { People } from 'app/movie-app/shared/people';
import { Movie } from 'app/movie-app/shared/movie';
import { Review } from 'app/movie-app/shared/review';
import { Video } from 'app/movie-app/shared/video';
import { DataFormatter } from 'app/movie-app/shared/data-formatter';

import { MovieService } from 'app/movie-app/services/movie.service';
import { ExploreService } from 'app/movie-app/services/explore.service';

import { TrailerComponent } from 'app/movie-app/components/movie-detail/trailer/trailer.component';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  peoples: People[];
  reviews: Review[];
  similarMovies: Movie[];
  videos: Video[];
  videoSize: {
    width: string,
    height: string,
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.videoSize = DataFormatter.formateVideoSize(1080, 720);
  }
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private modalService: NgbModal,
    private exploreService: ExploreService,
  ) { }

  ngOnInit() {
    this.videoSize = DataFormatter.formateVideoSize(1080, 720);
    this.route.params.subscribe((params: any) => {
      this.movie = this.route.snapshot.data.movie;
      this.movieService.fetchPeople(this.movie.id, this.movie.type)
        .then((data: People[]) => this.peoples = data);
      this.movieService.fetchReview(this.movie.id, this.movie.type)
        .then((data: Review[]) => this.reviews = data);
      this.movieService.fetchSimilarMovies(this.movie.id, this.movie.type)
        .then((data: Movie[]) => this.similarMovies = data);
    });
  }

  openTrailerModal() {
    this.movieService.fetchVideos(this.movie.id, this.movie.type)
      .then((data: Video[]) => {
        this.videos = data;
        const modalRef = this.modalService.open(TrailerComponent, {
          windowClass: 'dark-modal',
          size: 'lg',
          centered: true,
        });
        modalRef.componentInstance.width = this.videoSize.width;
        modalRef.componentInstance.height = this.videoSize.height;
        modalRef.componentInstance.key = this.videos[0].key;
      });
  }

  backToExplore() {
    this.exploreService.goToExplore();
  }

}
