import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../../services/museum.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css']
})
export class MuseumComponent implements OnInit {
  private museumService: MuseumService;
  private museums: JSON;
  

  constructor(museumService: MuseumService) { 
  this.museumService = museumService;
  }

  ngOnInit() {
    
  }

}
