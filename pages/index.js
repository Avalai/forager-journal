import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider, ListItemText, Typography, } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
}))

const Icon = ({ name }) => {
    const IconElement = {
        LocalFloristIcon,
        FilterVintageIcon,
        Tree: 'div',
        Leaf: 'div'
    }[name]
    return <IconElement />
}

export default function Index() {

    const [listItems, setListItems] = useState([
        { id: 1, name: 'Milkweed', icon: 'FilterVintageIcon', desc: 'Sticky and white', },
        { id: 2, name: 'Wood Sorrel', icon: 'LocalFloristIcon', desc: 'Small and tart', },
        { id: 3, name: 'Black Walnut Tree', icon: 'Tree', desc: 'These walnuts taste like paint', },
        { id: 4, name: 'Clover', icon: 'Leaf', desc: 'These are everywhere, but especially right here', },
        { id: 5, name: 'Lamb\'s Quarter', icon: 'Leaf', desc: 'These are everywhere, but especially right here', },
        { id: 6, name: 'Dandelion', icon: 'Leaf', desc: 'These are everywhere, but especially here', },
        { id: 7, name: 'Thistle', icon: 'Leaf', desc: 'These are everywhere, but especially here', },
        { id: 8, name: 'Burdock', icon: 'Leaf', desc: 'These are everywhere, but especially here', },
        { id: 9, name: 'Garden Sorrel', icon: 'Leaf', desc: 'These are everywhere, but especially here', },
        { id: 10, name: 'Oak Tree', icon: 'Tree', desc: 'There are many oak trees around here, but this one already has acorns', },
    ])
    const classes = useStyles();

    return (
        <Layout pageName="Home">

            <List className={classes.root}>
            {
                listItems.map(item => (
                    <ListItem key={ item.id } alignItems="flex-start">
                        <ListItemIcon>
                            <Icon name={item.icon} />
                        </ListItemIcon>
                        <ListItemText
                        primary={ item.name }
                        secondary={
                            <Typography
                                component="p"
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