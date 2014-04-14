@servers(['dev' => 'jenkins@turbotim.stagingarea.us'])

@task('deploy', ['on' => 'dev'])
	cd /var/www/tim-front/site/current
	git pull origin development
@endtask
