import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div id="preloader">
      <div class="spinner"></div>
    </div>
    <div class="container all  mt-2">
      <div class="row">
        <div class="col-lg-12 col-md-12 mt-3">
            <div class="player bg-light shadow" id="player">
              <h1 class="display-5 text-center">MH Music Player</h1>
              <div class="search-container">
                <input type="text" id="search-input" placeholder="Search">
              </div>
              <div class=" rounded mt-2">
                <div class="tab-container">
                  <ul class="nav nav-tabs d-none d-lg-flex" id="tabs">
                    <li class="nav-item">
                      <a class="nav-link active  active-tab" id="all-songs-tab" data-bs-toggle="tab" href="#all-songs">All Songs</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  " id="most-played-tab" data-bs-toggle="tab" href="#most-played">Most Played</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " id="recently-played-tab" data-bs-toggle="tab" href="#recently-played">Recently Played</a>
                    </li>
                  </ul>
                  <div class="tab-content d-none d-lg-flex">
                    <div class="tab-pane fade show active" id="all-songs">
                      <ul class="playlist"></ul>
                    </div>
                    <div class="tab-pane fade" id="most-played">
                      <ul class="most-played-list"></ul>
                    </div>
                    <div class="tab-pane fade" id="recently-played">
                      <ul class="recently-played-list"></ul>
                    </div>
                  </div>
                </div>
                <div class="accordion d-lg-none mt-2" id="accordionExample">
                  <div class="accordion-item">
                    <p class="accordion-title ">All Songs <i class="fas fa-chevron-down"></i></p>
                    <div class="accordion-content">
                      <ul class="playlist"></ul>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <p class="accordion-title ">Most Played <i class="fas fa-chevron-down"></i></p>
                    <div class="accordion-content">
                      <ul class="most-played-list"></ul>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <p class="accordion-title ">Recently Played <i class="fas fa-chevron-down"></i></p>
                    <div class="accordion-content">
                      <ul class="recently-played-list"></ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center" id="song-title"></div>
              <div id="progress-bar">
                <div id="progress"></div>
              </div>
              <div class="text-center" id="timer">0:00 / 0:00</div>
              <div class="text-center">
                <div class="play-controls">
                  <button id="repeat-all" class="control-button">
                    <i class="fas fa-redo"></i>
                  </button>
                  <button id="repeat-current" class="control-button">
                    <i class="fas fa-circle"></i>
                  </button>
                  <button id="prev" class="control-button">
                    <i class="fas fa-step-backward"></i>
                  </button>
                  <button id="play" class="control-button">
                    <i class="fas fa-play"></i>
                  </button>
                  <button id="next" class="control-button">
                    <i class="fas fa-step-forward"></i>
                  </button>
                  <button id="shuffle" class="control-button">
                    <i class="fas fa-random"></i>
                  </button>
                  <button id="download" class="control-button">
                    <i class="fas fa-download"></i>
                  </button>
                </div>
                <input type="range" id="volume" min="0" max="1" step="0.01" value="1">
              </div>
        
        
  <div class="theme-switch">
  
    <label class="theme-switch-label">
      <input type="checkbox" id="theme-toggle">
      <span class="slider round"></span>
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
    </label>
  </div>
  
  <div class=" set fw-bold">Dark mode</div>
  
  </div>
  
  `,
})
export class App {
  name = 'Angular';
}


bootstrapApplication(App);
