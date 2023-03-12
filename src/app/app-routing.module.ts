import { Component, NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './solace-toolkit/work-components/projects/projects.component';
import { SoftwareComponent } from './software/software.component';
import { CharacterControllersComponent } from './solace-toolkit/controllers-components/character-controllers/character-controllers.component';
import { EnvironmentMapComponent } from './solace-toolkit/environment-components/environment-map/environment-map.component';
import { SoundSetsComponent } from './solace-toolkit/sound-components/sound-sets/sound-sets.component';
import { SolacetkWikiComponent } from './solace-toolkit/common/solacetk-wiki/solacetk-wiki.component';
import { BehaviorAnimationsComponent } from './solace-toolkit/behaviors/behavior-animations/behavior-animations.component';
import { TransportControllersComponent } from './solace-toolkit/controllers-components/transport-controllers/transport-controllers.component';
import { BehaviorActionsComponent } from './solace-toolkit/action-components/behavior-actions/behavior-actions.component';
import { BehaviorConditionsComponent } from './solace-toolkit/behaviors/behavior-conditions/behavior-conditions.component';
import { BehaviorStatesComponent } from './solace-toolkit/behaviors/behavior-states/behavior-states.component';
import { BehaviorSystemsComponent } from './solace-toolkit/behaviors/behavior-systems/behavior-systems.component';
import { EnemyControllersComponent } from './solace-toolkit/controllers-components/enemy-controllers/enemy-controllers.component';
import { NavigationControllersComponent } from './solace-toolkit/controllers-components/navigation-controllers/navigation-controllers.component';
import { SpawnerControllersComponent } from './solace-toolkit/controllers-components/spawner-controllers/spawner-controllers.component';
import { StaticControllersComponent } from './solace-toolkit/controllers-components/static-controllers/static-controllers.component';
import { WeaponsControllersComponent } from './solace-toolkit/controllers-components/weapons-controllers/weapons-controllers.component';
import { EnvironmentMapLayerComponent } from './solace-toolkit/environment-components/environment-map-layer/environment-map-layer.component';
import { ResourceCollectionsComponent } from './solace-toolkit/game-components/resource-collections/resource-collections.component';
import { EnvironmentTilesetsComponent } from './solace-toolkit/environment-components/environment-tilesets/environment-tilesets.component';
import { SolaceToolkitComponent } from './solace-toolkit/solace-toolkit.component';
import { SoundSourcesComponent } from './solace-toolkit/sound-components/sound-sources/sound-sources.component';
import { GameStatesComponent } from './solace-toolkit/game-components/game-states/game-states.component';
import { GameTimelinesComponent } from './solace-toolkit/game-components/game-timelines/game-timelines.component';
import { ActionEventsComponent } from './solace-toolkit/action-components/action-events/action-events.component';
import { ActionMessagesComponent } from './solace-toolkit/action-components/action-messages/action-messages.component';
import { HudsComponent } from './solace-toolkit/interface-components/huds/huds.component';
import { HudElementsComponent } from './solace-toolkit/interface-components/hud-elements/hud-elements.component';
import { HudMenusComponent } from './solace-toolkit/interface-components/hud-menus/hud-menus.component';
import { HudDialogsComponent } from './solace-toolkit/interface-components/hud-dialogs/hud-dialogs.component';
import { AudioEffectsComponent } from './solace-toolkit/effects-components/audio-effects/audio-effects.component';
import { VisualEffectsComponent } from './solace-toolkit/effects-components/visual-effects/visual-effects.component';
import { LightEffectsComponent } from './solace-toolkit/effects-components/light-effects/light-effects.component';
import { LiquidEffectsComponent } from './solace-toolkit/effects-components/liquid-effects/liquid-effects.component';
import { OverlayEffectsComponent } from './solace-toolkit/effects-components/overlay-effects/overlay-effects.component';
import { ParticleSystemsComponent } from './solace-toolkit/controllers-components/particle-systems/particle-systems.component';
import { BehaviorBranchesComponent } from './solace-toolkit/behaviors/behavior-branches/behavior-branches.component';
import { AuthorizationGuard } from './auth/auth-guard';
import { IdentityComponent } from './identity/identity.component';
import { RouterModule, Routes } from '@angular/router';
import { StoryCardsComponent } from './solace-toolkit/game-components/story-cards/story-cards.component';
import { BehaviorNoopStatesComponent } from './solace-toolkit/behaviors/behavior-states/behavior-noop-states.component';

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'software',
    component: SoftwareComponent,
    ////canActivate: [AuthorizationGuard]
  },
  {
    path: 'identity',
    component: IdentityComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'solace-tk',
    component: SolaceToolkitComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'characters',
    component: CharacterControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'enemies',
    component: EnemyControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'objects',
    component: StaticControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'spawners',
    component: SpawnerControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'particlesystems',
    component: ParticleSystemsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'behaviorsystems',
    component: BehaviorSystemsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'branches',
    component: BehaviorNoopStatesComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'states',
    component: BehaviorStatesComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'tilesets',
    component: EnvironmentTilesetsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'collections',
    component: ResourceCollectionsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'maps',
    component: EnvironmentMapComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'layers',
    component: EnvironmentMapLayerComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'soundsets',
    component: SoundSetsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'soundsources',
    component: SoundSourcesComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'wiki',
    component: SolacetkWikiComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'wiki/:article',
    component: SolacetkWikiComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'weapons',
    component: WeaponsControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'animations',
    component: BehaviorAnimationsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'actions',
    component: BehaviorActionsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'events',
    component: ActionEventsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'messages',
    component: ActionMessagesComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'transports',
    component: TransportControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'navigation',
    component: NavigationControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'gamestates',
    component: GameStatesComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'timelines',
    component: GameTimelinesComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'navigation',
    component: NavigationControllersComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'huds',
    component: HudsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'hudelements',
    component: HudElementsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'hudmenus',
    component: HudMenusComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'huddialogs',
    component: HudDialogsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'audioeffects',
    component: AudioEffectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'visualeffects',
    component: VisualEffectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'lights',
    component: LightEffectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'liquids',
    component: LiquidEffectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'overlays',
    component: OverlayEffectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'storycards',
    component: StoryCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
