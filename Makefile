
LOCAL_ADDR ?= 127.0.0.1
BIND_ADDR ?= 0.0.0.0
LOCAL_PORT ?= 13093

default:
	@echo "no default."

runserver:
	hugo server --baseUrl=http://$(LOCAL_ADDR)/ --bind=$(BIND_ADDR) --port=$(LOCAL_PORT) --watch --disableFastRender --i18n-warnings --verboseLog=true -v

runserver_drafts:
	hugo server --baseUrl=http://$(LOCAL_ADDR)/ --bind=$(BIND_ADDR) --port=$(LOCAL_PORT) --watch --disableFastRender --buildDrafts --i18n-warnings --verboseLog=true -v

