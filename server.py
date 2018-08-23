from aiohttp import web

routes = web.RouteTableDef()

@routes.post('/')
async def hello(request):
	result = await request.text()
	print(result)
	return web.Response(text='OK')

app = web.Application()
app.add_routes(routes)
web.run_app(app)
