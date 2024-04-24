from plone.restapi.controlpanels import RegistryConfigletPanel
from rer.immersivereader.interfaces import IImmersiveReaderControlpanel
from rer.immersivereader.interfaces import IImmersiveReaderSettings
from rer.immersivereader.interfaces import IRerImmersivereaderLayer
from zope.component import adapter
from zope.interface import implementer
from zope.interface import Interface


@adapter(Interface, IRerImmersivereaderLayer)
@implementer(IImmersiveReaderControlpanel)
class ImmersiveReaderControlpanel(RegistryConfigletPanel):
    schema = IImmersiveReaderSettings
    configlet_id = "ImmersiveReaderSettings"
    configlet_category_id = "Products"
    schema_prefix = "rer.immersivereader"
