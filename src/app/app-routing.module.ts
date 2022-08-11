import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MusicComponent } from './music/music.component';
import { OpenshiftVisualSystemComponent } from './openshift-visual-system/openshift-visual-system.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SoftwareComponent } from './software/software.component';
import { CharacterControllersComponent } from './solace-toolkit/controllers-components/character-controllers/character-controllers.component';
import { VideosComponent } from './videos/videos.component';
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
import { EnvironmentResourcecollectionsComponent } from './solace-toolkit/environment-components/environment-resourcecollections/environment-resourcecollections.component';
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

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'resume',
    component: ResumeComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'software',
    component: SoftwareComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'music',
    component: MusicComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'videos',
    component: VideosComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'openshift-visual-system',
    component: OpenshiftVisualSystemComponent
  },
  {
    path: 'solace-tk',
    component: SolaceToolkitComponent
  },
  {
    path: 'characters',
    component: CharacterControllersComponent
  },
  {
    path: 'enemies',
    component: EnemyControllersComponent
  },
  {
    path: 'objects',
    component: StaticControllersComponent
  },
  {
    path: 'spawners',
    component: SpawnerControllersComponent
  },
  {
    path: 'particlesystems',
    component: SpawnerControllersComponent
  },
  {
    path: 'behaviorsystems',
    component: BehaviorSystemsComponent
  },
  {
    path: 'branches',
    component: BehaviorStatesComponent
  },
  {
    path: 'states',
    component: BehaviorStatesComponent
  },
  {
    path: 'conditions',
    component: BehaviorConditionsComponent
  },
  {
    path: 'tilesets',
    component: EnvironmentTilesetsComponent
  },
  {
    path: 'resourcecollections',
    component: EnvironmentResourcecollectionsComponent
  },
  {
    path: 'maps',
    component: EnvironmentMapComponent
  },
  {
    path: 'layers',
    component: EnvironmentMapLayerComponent
  },
  {
    path: 'soundsets',
    component: SoundSetsComponent
  },
  {
    path: 'soundsources',
    component: SoundSourcesComponent
  },
  {
    path: 'wiki',
    component: SolacetkWikiComponent
  },
  {
    path: 'wiki/:article',
    component: SolacetkWikiComponent,
  },
  {
    path: 'weapons',
    component: WeaponsControllersComponent,
  },
  {
    path: 'animations',
    component: BehaviorAnimationsComponent,
  },
  {
    path: 'actions',
    component: BehaviorActionsComponent,
  },
  {
    path: 'events',
    component: ActionEventsComponent,
  },
  {
    path: 'messages',
    component: ActionMessagesComponent,
  },
  {
    path: 'transports',
    component: TransportControllersComponent,
  },
  {
    path: 'navigation',
    component: NavigationControllersComponent,
  },
  {
    path: 'gamestates',
    component: GameStatesComponent,
  },
  {
    path: 'timelines',
    component: GameTimelinesComponent,
  },
  {
    path: 'navigation',
    component: NavigationControllersComponent,
  },
  {
    path: 'huds',
    component: HudsComponent,
  },
  {
    path: 'hudelements',
    component: HudElementsComponent,
  },
  {
    path: 'hudmenus',
    component: HudMenusComponent,
  },
  {
    path: 'huddialogs',
    component: HudDialogsComponent,
  },
  {
    path: 'audioeffects',
    component: AudioEffectsComponent,
  },
  {
    path: 'visualeffects',
    component: VisualEffectsComponent,
  },
  {
    path: 'lights',
    component: LightEffectsComponent,
  },
  {
    path: 'liquids',
    component: LiquidEffectsComponent,
  },
  {
    path: 'overlays',
    component: OverlayEffectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
