import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider, ListItemText, Typography } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
}))

export default function Index() {

    const [listItems, setListItems] = useState([
        { id: 1, name: 'Milkweed', icon: 'FilterVintageIcon', desc: 'Sticky and white', },
        { id: 2, name: 'Wood Sorrel', icon: 'LocalFloristIcon', desc: 'Small and tart', }
    ])
    const classes = useStyles();

    return (
        <Layout pageName="Home">

            <List className={classes.root}>
            {
                listItems.map(item => (
                    <ListItem key={ item.id } alignItems="flex-start">
                        <ListItemIcon>
                            <LocalFloristIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary={ item.name }
                        secondary={
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                { item.desc }
                            </Typography>
                        }
                        />
                    </ListItem>
                ))
            }
            </List>
        </Layout>
    )
}