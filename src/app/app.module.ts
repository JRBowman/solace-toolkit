import { NgModule, SecurityContext } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule, MarkdownService, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { SoftwareComponent } from './software/software.component';
import { IconAzuredevopsComponent } from './common/icon-azuredevops/icon-azuredevops.component';
import { IconDynamicsvgComponent } from './common/icon-dynamicsvg/icon-dynamicsvg.component';
import { IconFacebookComponent } from './common/icon-facebook/icon-facebook.component';
import { IconGithubComponent } from './common/icon-github/icon-github.component';
import { IconK8sComponent } from './common/icon-k8s/icon-k8s.component';
import { IconLinkedinComponent } from './common/icon-linkedin/icon-linkedin.component';
import { IconOpenshiftComponent } from './common/icon-openshift/icon-openshift.component';
import { IconSoundcloudComponent } from './common/icon-soundcloud/icon-soundcloud.component';
import { GitProjectCardComponent } from './git-project-card/git-project-card.component';
import { AllMaterialsModule } from './material/material-module';
import { SafeurlPipe } from './common/safeurl.pipe';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';


import { GitArticleComponent } from './git-article/git-article.component';
import { GojsAngularModule } from 'gojs-angular';
import { SolaceToolkitComponent } from './solace-toolkit/solace-toolkit.component';
import { SolaceTKListComponent } from './solace-toolkit/common/solacetk-model-list/solacetk-list.component';
import { CharacterControllersComponent } from './solace-toolkit/controllers-components/character-controllers/character-controllers.component';
import { TransportControllersComponent } from './solace-toolkit/controllers-components/transport-controllers/transport-controllers.component';
import { BehaviorAnimationsComponent } from './solace-toolkit/behaviors/behavior-animations/behavior-animations.component';
import { EnvironmentMapComponent } from './solace-toolkit/environment-components/environment-map/environment-map.component';
import { SoundSetsComponent } from './solace-toolkit/sound-components/sound-sets/sound-sets.component';
import { SolacetkWikiComponent } from './solace-toolkit/common/solacetk-wiki/solacetk-wiki.component';
import { ActionEventsComponent } from './solace-toolkit/action-components/action-events/action-events.component';
import { GameStatesComponent } from './solace-toolkit/game-components/game-states/game-states.component';
import { AudioEffectsComponent } from './solace-toolkit/effects-components/audio-effects/audio-effects.component';
import { LightEffectsComponent } from './solace-toolkit/effects-components/light-effects/light-effects.component';
import { HudDialogsComponent } from './solace-toolkit/interface-components/hud-dialogs/hud-dialogs.component';
import { ActionMessagesComponent } from './solace-toolkit/action-components/action-messages/action-messages.component';
import { BehaviorActionsComponent } from './solace-toolkit/action-components/behavior-actions/behavior-actions.component';
import { BehaviorConditionsComponent } from './solace-toolkit/behaviors/behavior-conditions/behavior-conditions.component';
import { BehaviorStatesComponent } from './solace-toolkit/behaviors/behavior-states/behavior-states.component';
import { BehaviorSystemsComponent } from './solace-toolkit/behaviors/behavior-systems/behavior-systems.component';
import { DynamicControllersComponent } from './solace-toolkit/controllers-components/dynamic-controllers/dynamic-controllers.component';
import { EnemyControllersComponent } from './solace-toolkit/controllers-components/enemy-controllers/enemy-controllers.component';
import { NavigationControllersComponent } from './solace-toolkit/controllers-components/navigation-controllers/navigation-controllers.component';
import { SpawnerControllersComponent } from './solace-toolkit/controllers-components/spawner-controllers/spawner-controllers.component';
import { StaticControllersComponent } from './solace-toolkit/controllers-components/static-controllers/static-controllers.component';
import { WeaponsControllersComponent } from './solace-toolkit/controllers-components/weapons-controllers/weapons-controllers.component';
import { LiquidEffectsComponent } from './solace-toolkit/effects-components/liquid-effects/liquid-effects.component';
import { OverlayEffectsComponent } from './solace-toolkit/effects-components/overlay-effects/overlay-effects.component';
import { VisualEffectsComponent } from './solace-toolkit/effects-components/visual-effects/visual-effects.component';
import { EnvironmentMapLayerComponent } from './solace-toolkit/environment-components/environment-map-layer/environment-map-layer.component';
import { ResourceCollectionsComponent } from './solace-toolkit/game-components/resource-collections/resource-collections.component';
import { EnvironmentTilesetsComponent } from './solace-toolkit/environment-components/environment-tilesets/environment-tilesets.component';
import { GameTimelinesComponent } from './solace-toolkit/game-components/game-timelines/game-timelines.component';
import { HudElementsComponent } from './solace-toolkit/interface-components/hud-elements/hud-elements.component';
import { HudMenusComponent } from './solace-toolkit/interface-components/hud-menus/hud-menus.component';
import { HudsComponent } from './solace-toolkit/interface-components/huds/huds.component';
import { SoundSourcesComponent } from './solace-toolkit/sound-components/sound-sources/sound-sources.component';
import { SolacetkSearchSheetComponent } from './solace-toolkit/common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorBranchesComponent } from './solace-toolkit/behaviors/behavior-branches/behavior-branches.component';
import { ParticleSystemsComponent } from './solace-toolkit/controllers-components/particle-systems/particle-systems.component';
import { SolacetkTagsComponent } from './solace-toolkit/common/solacetk-tags/solacetk-tags.component';
import { SolacetkAnimationEditorComponent } from './solace-toolkit/common/solacetk-animation-editor/solacetk-animation-editor.component';
import { WorkItemComponent } from './solace-toolkit/work-components/work-item/work-item.component';
import { WorkCommentComponent } from './solace-toolkit/work-components/work-comment/work-comment.component';
import { ProjectsComponent } from './solace-toolkit/work-components/projects/projects.component';
import { WorkItemSheetEditorComponent } from './solace-toolkit/work-components/work-item/work-item-sheet-editor/work-item-sheet-editor.component';
import { ControllerComponentComponent } from './solace-toolkit/controllers-components/controller-component/controller-component.component';
import { SolacetkAttributesPanelComponent } from './solace-toolkit/common/solacetk-attributes-panel/solacetk-attributes-panel.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { SolacetkToolnavExtendedComponent } from './solace-toolkit/common/solacetk-toolnav-extended/solacetk-toolnav-extended.component';
import { SolacetkIdentityBadgeComponent } from './solace-toolkit/common/solacetk-identity-badge/solacetk-identity-badge.component';
import { IdentityComponent } from './identity/identity.component';
import { SolacetkBottomSheetComponent } from './solace-toolkit/common/solacetk-bottom-sheet/solacetk-bottom-sheet.component';
import { SolacetkEventPanelComponent } from './solace-toolkit/common/solacetk-event-panel/solacetk-event-panel.component';
import { SolacetkConditionsPanelComponent } from './solace-toolkit/common/solacetk-conditions-panel/solacetk-conditions-panel.component';
import { SolacetkMessagesPanelComponent } from './solace-toolkit/common/solacetk-messages-panel/solacetk-messages-panel.component';
import { SolaceControllerComponentComponent } from './solace-toolkit/common/solace-controller-component/solace-controller-component.component';
import { SolacetkControllerComponentComponent } from './solace-toolkit/common/solacetk-controller-component/solacetk-controller-component.component';
import { SolacetkPanelComponent } from './solace-toolkit/common/solacetk-panel/solacetk-panel.component';
import { SolacetkPanelListComponent } from './solace-toolkit/common/solacetk-panel-list/solacetk-panel-list.component';
import { MapLayersPanelComponent } from './solace-toolkit/environment-components/map-layers-panel/map-layers-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { SolacetkStorycardComponent } from './solace-toolkit/common/solacetk-storycard/solacetk-storycard.component';
import { StoryCardsComponent } from './solace-toolkit/game-components/story-cards/story-cards.component';
import { TileRuleEditorComponent } from './solace-toolkit/environment-components/tile-rule-editor/tile-rule-editor.component';
import { SolacetkSidenavExtendedComponent } from './solace-toolkit/common/solacetk-sidenav-extended/solacetk-sidenav-extended.component';
import { SolacetkListToolbarComponent } from './solace-toolkit/common/solacetk-list-toolbar/solacetk-list-toolbar.component';
import { BehaviorNoopStatesComponent } from './solace-toolkit/behaviors/behavior-states/behavior-noop-states.component';
import { SolacetkDevbannerComponent } from './solace-toolkit/common/solacetk-devbanner/solacetk-devbanner.component';
import { SolacetkSvgPlateComponent } from './solace-toolkit/common/solacetk-svg-plate/solacetk-svg-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    BehaviorNoopStatesComponent,
    IntroductionComponent,
    ProjectsComponent,
    SoftwareComponent,
    GitProjectCardComponent,
    IconAzuredevopsComponent,
    IconDynamicsvgComponent,
    IconFacebookComponent,
    IconGithubComponent,
    IconK8sComponent,
    IconLinkedinComponent,
    IconOpenshiftComponent,
    IconSoundcloudComponent,
    GitArticleComponent,
    SolaceToolkitComponent,
    BehaviorSystemsComponent,
    CharacterControllersComponent,
    EnemyControllersComponent,
    DynamicControllersComponent,
    StaticControllersComponent,
    SpawnerControllersComponent,
    TransportControllersComponent,
    NavigationControllersComponent,
    BehaviorAnimationsComponent,
    BehaviorStatesComponent,
    BehaviorConditionsComponent,
    BehaviorActionsComponent,
    EnvironmentTilesetsComponent,
    ResourceCollectionsComponent,
    EnvironmentMapComponent,
    EnvironmentMapLayerComponent,
    SoundSetsComponent,
    SoundSourcesComponent,
    SolacetkWikiComponent,
    SolaceTKListComponent,
    WeaponsControllersComponent,
    ActionMessagesComponent,
    ActionEventsComponent,
    GameStatesComponent,
    GameTimelinesComponent,
    OverlayEffectsComponent,
    VisualEffectsComponent,
    LiquidEffectsComponent,
    AudioEffectsComponent,
    LightEffectsComponent,
    HudsComponent,
    HudElementsComponent,
    HudMenusComponent,
    HudDialogsComponent,
    SolacetkSearchSheetComponent,
    BehaviorBranchesComponent,
    ParticleSystemsComponent,
    SolacetkTagsComponent,
    SolacetkAnimationEditorComponent,
    WorkItemComponent,
    WorkCommentComponent,
    WorkItemSheetEditorComponent,
    ControllerComponentComponent,
    SolacetkAttributesPanelComponent,
    SolacetkToolnavExtendedComponent,
    SolacetkIdentityBadgeComponent,
    IdentityComponent,
    SolacetkBottomSheetComponent,
    SolacetkEventPanelComponent,
    SolacetkConditionsPanelComponent,
    SolacetkMessagesPanelComponent,
    SolaceControllerComponentComponent,
    SolacetkControllerComponentComponent,
    SolacetkPanelComponent,
    SolacetkPanelListComponent,
    MapLayersPanelComponent,
    SafeurlPipe,
    SolacetkStorycardComponent,
    StoryCardsComponent,
    TileRuleEditorComponent,
    SolacetkSidenavExtendedComponent,
    SolacetkListToolbarComponent,
    SolacetkDevbannerComponent,
    SolacetkSvgPlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthConfigModule,
    HttpClientModule,
    GojsAngularModule,
    AllMaterialsModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
  ],
  providers: [MarkdownService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
