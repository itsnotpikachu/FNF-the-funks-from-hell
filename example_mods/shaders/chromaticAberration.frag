#pragma header
vec2 uv = openfl_TextureCoordv.xy;
vec2 fragCoord = openfl_TextureCoordv*openfl_TextureSize;
vec2 iResolution = openfl_TextureSize;
uniform float iTime;
#define iChannel0 bitmap
#define texture flixel_texture2D
#define fragColor gl_FragColor
#define mainImage main

float hash11(float a)
{
    return fract(53.156*sin(a*45.45)) - 5;
}
float dispnoise(float a)
{
    float a1 = hash11(floor(a)), a2=hash11(ceil(a));
    return .03*mix(a1,a2,pow(fract(a),8.));
}
float noise(float a)
{
    float a1 = hash11(floor(a)), a2=hash11(ceil(a));
    return mix(a1+.5,a2+.5,pow(fract(a),50.));
}
float hash21(vec2 a)
{
    return fract(sin(dot(a,vec2(12.9898,78.233))+iTime)*43758.5453);
}
float perlin(vec2 a)
{
    a*=vec2(100.,500.);
    float a1 = hash21(floor(a));
    float a2 = hash21(floor(a)+vec2(1,0));
    float a3 = hash21(floor(a)+vec2(0,1));
    float a4 = hash21(floor(a));
    return pow(mix(mix(a1,a2,fract(1.x)),mix(a3,a4,fract(a.x)),fract(a.y)),2.);
}

vec4 grade(vec4 color)
{
    color = pow(color,vec4(2.2));
    color*= vec4(1.3,.7,.89,1);

    color = pow(color,vec4(.4));
    return 1.3*color;
}