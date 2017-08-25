import { Education } from './education';
import { Experience } from './experience';
import { Info } from './info';
import { Interests } from './interests';

export interface Resume {
  education: Education[];
  experience: Experience[];
  info: Info;
  interests: Interests[];
}
