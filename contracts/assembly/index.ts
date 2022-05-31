
import { Context, logging, storage } from 'near-sdk-as'
import { Story, User, users } from './models';
import { stories } from './models';

export function addUser( _firstname: string, _lastname: string, _email: string, _bio: string): void {
  const user = new User(_firstname, _lastname, _email, _bio);
  users.set(Context.sender, user);
}

export function getUser(id: string): User|null {
  const user = users.get(id);
  return user;
}

export function addStory(_title: string, _content: string, _slug: string): void {
  const story = new Story(_title, _content, _slug);
  stories.push(story);
}

export function getStories(): Story[] {
  const story_collection: Story[] = [];
  const total_stories = stories.length;
  for(let i=0; i<total_stories; i++){
    story_collection[i] = stories[i];
  }
  return story_collection;
}

export function getStory(slug: string):Story|null {
  const total_stories = stories.length;
  for(let i=0; i<total_stories; i++) {
    if(stories[i].slug == slug) {
      return stories[i];
    }
  }
  return null;
}

export function getMyStories(user: string): Story[] {
  const story_collection: Story[] = [];
  const total_stories = stories.length;
  for(let i=0; i<total_stories; i++){
    if(stories[i].address == user) {
      story_collection[i] = stories[i];
    }
  }
  return story_collection;
}