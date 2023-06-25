import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '../../core/models/Skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

skill1: Skill = {
  id: 1,
  name: 'Jardineria',
};

skill2: Skill = {
  id: 2,
  name: 'Botánica',
};

skills: Skill[] = [this.skill1, this.skill2];

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillById(id: number): Observable<Skill | undefined> {
    return of(this.skills.find(skill => skill.id === id));
  }

}
