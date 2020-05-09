# ECE524

whoami #what user am I?
# wmi and wmic allows to query various aspects of Windows.
wmic services get  name.pathname.startmode #startmode is what specifies how the service starts. The service can be set to auto, or manual. We get a list of all services.
#windows based services we are not going to be able to have access to. 
wmic services get name.pathname.startmode |findstr /i /v "c:\Windows\\" |findstr /i /v """" 
# gets rid of all Windows services and quoted ""
icacls # to check permission on folders
#use icacls to check write permissions within all folders, once we find a folder with Full permission
icacls "c:"

###################################################
# restart the system
shutdown -r
