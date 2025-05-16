const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Behaviors.jumpthru,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.Bullet.Acts.SetSpeed
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{chão: 0},
	{Projétil: 0},
	{Sprite: 0},
	{PularAtravés: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{personagem: 0},
	{porta: 0},
	{Sprite3: 0},
	{Texto2: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite2: 0},
	{Texto3: 0},
	{moedas: 0},
	{armadilha: 0}
];

self.InstanceType = {
	chão: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	personagem: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Texto3: class extends self.ITextInstance {}
}