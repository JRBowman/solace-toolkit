import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class EffectComponent implements IModelTK {

    public id?: number = 0;
    public name?: string = "EffectComponent";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    // Effect Specifics:
    public group: string = "General";
    public enabled: boolean = true;
    public order: number = 0;
    public tint: string = "#ffffff";
    public effect: string = "shaderName";
    
    public parameters: SoltkKeyValue[] = [];

    public renderLayer: RenderLayer = RenderLayer.All;

    public BasicScreenFxData(): SoltkKeyValue[]
    {
        var data: SoltkKeyValue[] = [];

        data.push({key: "Time", operator: 0, data: "$(TotalTime)", type: 0});

        return data;
    }

    public ScreenFxData(): SoltkKeyValue[]
    {
        var data: SoltkKeyValue[] = [];

        data.push({key: "NoiseTexture", operator: 0, data: "perlin-0", type: 0});
        data.push({key: "ParallaxLevel", operator: 0, data: "0.1", type: 1, floatData: 0.1});
        data.push({key: "ScrollSpeedX", operator: 0, data: "0.1", type: 1, floatData: 0.1});
        data.push({key: "ScrollSpeedY", operator: 0, data: "0.1", type: 1, floatData: 0.1});

        data.push({key: "time", operator: 0, data: "$(TotalTime)", type: 0});
        data.push({key: "camPoint", operator: 0, data: "$(Camera.Position)", type: 0});

        return data;
    }

    public PostProcessFxData(): SoltkKeyValue[]
    {
        var data: SoltkKeyValue[] = [];

        data.push({key: "time", operator: 0, data: "$(TotalTime)", type: 0});
        data.push({key: "camPoint", operator: 0, data: "$(Camera.Position)", type: 0});

        return data;
    }

    public VolumetricLightingData(): SoltkKeyValue[]
    {
        var data: SoltkKeyValue[] = [];

        data.push({key: "Volumetric.Hue", operator: 0, data: "#ffffff", type: 0});
        data.push({key: "Volumetric.MaxOpacity", operator: 0, data: "0.55", type: 1, floatData: 0.55});

        return data;
    }

    public FinalPostFxData(): SoltkKeyValue[]
    {
        var data: SoltkKeyValue[] = [];

        data.push({key: "Bloom.Sigma", operator: 0, data: "1.25", type: 1, floatData: 1.25});
        data.push({key: "Bloom.Radius", operator: 0, data: "2", type: 2, intData: 2});
        data.push({key: "Bloom.Threshold", operator: 0, data: "0.667", type: 1, floatData: 0.667});

        return data;
    }
}

export enum RenderLayer
{
    Default,
    DistantBackground,
    Background,
    Midground,
    Ground,
    Foreground,
    Frontground,
    Interface,
    All
}
